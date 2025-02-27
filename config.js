module.exports = {
  env: (process.env.NODE_ENV || 'development'),
  server: {
    host: '0.0.0.0',
    port: (process.env.PORT || 2345)
  },
  redis: {
    url: (process.env.REDIS_URL || 'redis://localhost:6379'),
    namespace: 'gs'
  },
  caching: {
    enable: true,
    expiry: (60 * 60 * 24)
  },
  suggestionConfig: {
    minPopulation: 5000,
    maxPopulation: null,
    countryWhitelist: ['CA', 'US'],
    scorePrecision: 4,
    coordinateScoreWeight: 0.5
  }
};
