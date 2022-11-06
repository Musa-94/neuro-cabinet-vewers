window.config = {
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  dataSources: [
    {
      friendlyName: 'DCM4CHEE Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'DCM4CHEE',
        wadoUriRoot:
          'http://178.170.242.122:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'http://178.170.242.122:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'http://178.170.242.122:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        requestOptions: {
          auth: 'admin:admin',
        },
      },
    },
  ],
  studyListFunctionsEnabled: true,
  defaultDataSourceName: 'dicomweb',
};
