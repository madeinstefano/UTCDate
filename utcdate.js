module.exports = {
  
  /**
  * @returns today's date in UTC epoch without time part (00:00:00)
  */
  today( ) {
    var nd = new Date();
    var d = [ nd.getUTCFullYear(), nd.getUTCMonth(), nd.getUTCDate() ];
    return Date.UTC( d[0], d[1], d[2] );
  },
  
  /**
  * @returns now's date/time in UTC epoch
  */
  now( ) {
    var nd = new Date();
    var d = [ nd.getUTCFullYear(), nd.getUTCMonth(), nd.getUTCDate(), nd.getUTCHours(), nd.getUTCMinutes(), nd.getUTCSeconds(), nd.getUTCMilliseconds() ];
    return Date.UTC( d[0], d[1], d[2], d[3], d[4], d[5], d[6] );
  }
}
