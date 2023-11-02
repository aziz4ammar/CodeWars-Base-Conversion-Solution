function convert(input, source, target) {
    const base_in = source.length;
    const base_out = target.length;
    let acc = 0;
    let out = '';
  
    for (const d of input) {
      acc *= base_in;
      acc += source.indexOf(d);
    }
  
    while (acc !== 0) {
      const d = target[acc % base_out];
      acc = Math.floor(acc / base_out);
      out = d + out;
    }
  
    return out || target[0];
  }
  
  // Example usage:
  const source = "01";
  const target = "0123456789";
  const input = "1101";
  const result = convert(input, source, target);
  console.log(result); // Outputs "13"  