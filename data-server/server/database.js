var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "modularity-dashboard-data.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
	throw err
    }
});

module.exports = db
