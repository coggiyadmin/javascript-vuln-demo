const { execSync } = require('child_process');
const resolvers = {
  Mutation: {
    run: (_root, args) => { execSync('echo ' + args.cmd); }, // SOURCE graphql var -> SINK
  },
};
module.exports = { resolvers };
