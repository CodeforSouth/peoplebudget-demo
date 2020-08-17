const router = require('express').Router();

const { router: Auth, version: AuthVersion } = require('./Authentication');
router.use(`/v${AuthVersion}/auth`, Auth);
const { router: User, version: UserVersion } = require('./user');
router.use(`/v${UserVersion}/user`, User);
const { router: Role, version: RoleVersion } = require('./role');
router.use(`/v${RoleVersion}/role`, Role);
const { router: UserFollow, version: UserFollowVersion } = require('./userFollow');
router.use(`/v${UserFollowVersion}/userfollow`, UserFollow);
const { router: Comment, version: CommentVersion } = require('./comment');
router.use(`/v${CommentVersion}/comment`, Comment);
const { router: PostFollow, version: PostFollowVersion } = require('./postFollow');
router.use(`/v${PostFollowVersion}/postfollow`, PostFollow);
const { router: Post, version: PostVersion } = require('./post');
router.use(`/v${PostVersion}/post`, Post);
const { router: Reply, version: ReplyVersion } = require('./reply');
router.use(`/v${ReplyVersion}/reply`, Reply);
const { router: securitQ, version: securitQVersion } = require('./securityQuestion');
router.use(`/v${securitQVersion}/securityquestion`, securitQ);

module.exports = router;
