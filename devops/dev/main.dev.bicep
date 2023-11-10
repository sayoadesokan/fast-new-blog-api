param location string
param appSKU string
param servicePlan string
param appName string

resource nodeJSappServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: servicePlan
  location: location
  sku: {
    name: appSKU
  }
  properties: {
    reserved: true
  }
  kind: 'app,linux'
}

resource njsAppService 'Microsoft.Web/sites@2022-09-01' = {
  name: appName
  location: location
  properties: {
    httpsOnly: true
    serverFarmId: nodeJSappServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
      ]
    }
  }
}