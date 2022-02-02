function solution(new_id) {
  new_id = new_id.toLowerCase()
                .replace(/[^\w\-\_\.]/g, '')
                .replace(/\.+/g, '.')
                .replace(/^[.]/, '')
                .replace(/[.]$/, '');
    
  if (new_id === "") new_id = 'a';
  if (new_id.length >= 16) {
    new_id = new_id.substr(0, 15);
    if (new_id.endsWith('.')) {
      new_id = new_id.substr(0, 14);
    }
  }
    
  if (new_id.length <= 2) {
    const lastChar = new_id[new_id.length-1];
    while (new_id.length < 3) {
      new_id += lastChar;
    }  
  }
  const answer = new_id;
  return answer;
}
