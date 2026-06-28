const tournaments = require("./tournaments.json");

module.exports = tournaments.flatMap(tournament =>
  Object.entries(tournament.broadcasts).map(([countryCode, info]) => ({
    tournament,
    countryCode,
    platform: info.streaming,
    streaming: info.streaming,
    tv: info.tv || null,
    freeOverride: typeof info.free === "boolean" ? info.free : null,
    freeNoteOverride: info.freeNote || null,
    broadcastNote: info.note || null
  }))
);
