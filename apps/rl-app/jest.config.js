module.exports = {
  preset: '../jest.preset.js',
  coverageDirectory: '../../coverage/apps/rl-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  displayName: 'rl-app',
};
