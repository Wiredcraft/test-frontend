import React, { useState } from "react";
import "./App.scss";
import { Provider, PageStore } from "./store";
import { PageHeader } from "./components/PageHeader";
import { PageContent } from "./components/PageContent";
import { observer } from "mobx-react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./query-client";
import { ReactQueryDevtools } from "react-query/devtools";

export const App = observer(() => {
  const [pageStore] = useState(() => new PageStore());
  return (
    <Provider value={pageStore}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position="bottom-right" />
        <div className="app-wrapper">
          <PageHeader />
          <PageContent />
        </div>
      </QueryClientProvider>
    </Provider>
  );
});
