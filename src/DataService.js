class DataService {
    async parseDataFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const data = event.target.result;
          const parsedData = this.parseCSV(data);
          resolve(parsedData);
        };
  
        reader.onerror = (error) => reject(error);
  
        reader.readAsText(file);
      });
    }
  
    parseCSV(data) {
      const rows = data.split('\n');
      const headers = rows[0].split(',');
      const parsedData = [];
  
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const rowData = {};
        
        for (let j = 0; j < headers.length; j++) {
          rowData[headers[j].trim()] = row[j].trim();
        }
        
        parsedData.push(rowData);
      }
  
      return parsedData;
    }
  
    async search(query, data) {
      return data.filter((item) =>
        Object.values(item).some((value) => value.toLowerCase().includes(query.toLowerCase()))
      );
    }
  }
 export default new DataService();
  













