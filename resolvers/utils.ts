import * as jwt from "jsonwebtoken"
import * as _ from "lodash"

const APP_SECRET = "GraphQL-is-aw3some"

function getUserId(context) {
  const authorizationHeader = _.get(context, "req.headers.authorization", null)
  if (authorizationHeader) {
    const token = authorizationHeader.replace("Bearer ", "")
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error("Not authenticated")
}

module.exports = {
  APP_SECRET,
  getUserId,
}