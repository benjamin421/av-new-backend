module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5785a783547ba2a2f510001e6f828bb5'),
  },
});
