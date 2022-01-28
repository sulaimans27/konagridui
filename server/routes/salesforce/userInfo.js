module.exports = async function (fastify, options, next) {
  fastify.get("/userInfo", async function (request, reply) {
    try {
      var conn = fastify.conn;
      const result = await conn.identity();

      const userId = result.user_id;
      const userName = result.username;
      const organization_id = result.organization_id;
      const organization_name = result.organization_name;
      const display_name = result.display_name;
      const email = result.email;
      const locale = result.locale;

      const userInfo = {
        userId: userId,
        userName: userName,
        organization_id: organization_id,
        display_name: display_name,
        email: email,
        locale: locale,
      };

      return userInfo;
    } catch (err) {
      return { error: err.toString() };
    }
  });

  next();
};
