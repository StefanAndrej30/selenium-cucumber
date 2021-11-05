const identityConfig = {

    user: {
      grant_type: 'password',
      scope: 'openid GptwClientLoginScope all_claims profile email',
      username: 'nemanja.mircic+1133@htecgroup.com',
      password: 'Nemanja123!',
      client_id: 'GptwPortalCMP',
      client_secret: 'secret',
    },
  
    client: {
      grant_type: 'password',
      scope: 'openid GptwClientLoginScope all_claims profile email',
      username: 'milos.isailovic+777Japan@htecgroup.com',
      password: 'Automation1.',
      client_id: 'GptwPortalCMP',
      client_secret: 'secret',
    },
  
    downloadResults: {
      grant_type: 'password',
      scope: 'openid GptwClientLoginScope all_claims profile email',
      username: 'gptwqa+downloadResults@htecgroup.com',
      password: 'Automation1.',
      client_id: 'GptwPortalCMP',
      client_secret: 'secret',
    },
  
    configTests: {
      grant_type: 'password',
      scope: 'openid GptwClientLoginScope all_claims profile email',
      username: 'milos.isailovic+configurationTests@htecgroup.com',
      password: 'Automation1.',
      client_id: 'GptwPortalCMP',
      client_secret: 'secret',
    },
  
    certConfigTests: {
      grant_type: 'password',
      scope: 'openid GptwClientLoginScope all_claims profile email',
      username: 'milos.isailovic+certificationConfigurationTests@htecgroup.com',
      password: 'Automation1.',
      client_id: 'GptwPortalCMP',
      client_secret: 'secret',
    },
  
    trendingClient: {
      grant_type: 'password',
      scope: 'openid GptwClientLoginScope all_claims profile email',
      username: 'stefan.andrej.marjanovic+Trending@htecgroup.com',
      password: 'Trending10.10',
      client_id: 'GptwPortalCMP',
      client_secret: 'secret',
    },
  
  };
  
  module.exports = identityConfig;
  