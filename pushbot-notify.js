var apiKey = process.env.HUBOT_PUSHBOT_KEY;
var allRooms = process.env.HUBOT_PUSHBOT_ROOMS.split(',');

module.exports = function(robot) {
    robot.router.post("/hubot/pushbot.notifier", function(req, res) {
        if(req.body.api_key != apiKey) {
            res.send(403, "Unauthorized.");
        } else {
            for(var i = 0; i < allRooms.length; i++) {
                robot.messageRoom(allRooms[i], req.body.msg);
            }
            res.send(200, "notified");
        }
        res.end();
    });
};
