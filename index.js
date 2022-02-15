#!/usr/bin/env node

/**
 * walky-hex
 * walk glob pattern for hex
 *
 * @author ally <https://github.com/AllySummers>
 */

 const glob = require('glob');
 const fs = require('fs');
(async () => {

  
  const [ rawMatch, pattern ] = process.argv.slice(2);
  
  const match = rawMatch.toLowerCase().replace(/ /g, '');
  
  const globs = glob.sync(pattern);
  
  const matches = globs
    .filter(file => {
      if (fs.lstatSync(file).isFile()) {
        const readFile = fs.readFileSync(file, 'hex');
        if (readFile.includes(match)) return true;
      }
      return false;
    })
  
  console.log(JSON.stringify(matches, null, 2));
  
})();
