export const env = {
  jwtSecret: process.env.JWT_SECRET ?? 'secret',
  frontEndURL: process.env.frontEndURL ?? '',
};
