module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ['NEWS_API_kEY'],
        safe: false,
        allowUndefined: true,
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
