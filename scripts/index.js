var students ={
  names: ["prime", "victor", "prince", 'Malachi'],
  scores: [50, 60, 80, 70]
};
for(s in students){
  var student = students[s];
  for(name of student){
    document.write(name+"    ");
  }
  document.write("<br>");
}