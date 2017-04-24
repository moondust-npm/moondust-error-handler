/**
 * Created by Tristan on 17/4/24.
 */
module.exports = function () {
    return async (ctx, next) => {
        try {
            await next()
        } catch (e) {
            ctx.status = e.status || 500;
            ctx.body = {code: e.code || 500, message: e.message, name: e.name}
        }
    }
};