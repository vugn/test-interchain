import '../styles/globals.css';
import '@interchain-ui/react/styles';

import type { AppProps } from 'next/app';
import { ChainProvider, InterchainWalletModal } from '@interchain-kit/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Box, Toaster, useTheme } from '@interchain-ui/react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { CustomThemeProvider, Layout } from '@/components';
import { wallets, chains, assetLists } from '@/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function BitoraApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  return (
    <CustomThemeProvider>
      <ChainProvider chains={chains} assetLists={assetLists} wallets={wallets}
        walletModal={() => <InterchainWalletModal />}
      >
        <QueryClientProvider client={queryClient}>
          <Box className={themeClass}>
            <Layout>
              <Component {...pageProps} />
              <Toaster position="top-right" closeButton={true} />
            </Layout>
          </Box>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ChainProvider>
    </CustomThemeProvider>
  );
}

export default BitoraApp;
