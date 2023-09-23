//4. singleton implementation. there are other ways also like using const+ default eport of module
class DBConnection {
    constructor(conString) {
        this.conString = conString
    }
  
    static getInstance(conString) { //if instance exists no second instance will be created
      if (!this.instance) {
        this.instance = new DBConnection(conString);
      }
  
      return this.instance;
    }
  }
  
  let con1 = DBConnection.getInstance('mysqldb1');
  let con2 = DBConnection.getInstance('mysqldb2');
  

  console.log("con1: "+con1.conString); //db1
  console.log("con2: "+con2.conString); //db1 not db2