const path = require('path');
const express = require('express')
const app = express()
console.log(path.join(__dirname, '../express'));
const sttcPthl = path.join(__dirname, '../paths');
const PORT = process.env.PORT || 3030;
app.use(express.static(sttcPthl))
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

