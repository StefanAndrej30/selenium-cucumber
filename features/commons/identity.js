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
    username: 'stefan.andrej.marjanovic+supertest@htecgroup.com',
    password: 'Andrej10.10',
    client_id: 'GptwPortalCMP',
    client_secret: 'secret',
  },

};

module.exports = identityConfig;
