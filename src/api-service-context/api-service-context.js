import React from 'react'

const ApiServiceContext = React.createContext();
const {Provider: ApiServiceProvider, Consumer: ApiServiceConsumer} = ApiServiceContext;
export {ApiServiceConsumer, ApiServiceContext, ApiServiceProvider}