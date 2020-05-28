


  function initShader(gl,vertexShaderSource,fragmentShaderSource){
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

  gl.shaderSource(vertexShader,vertexShaderSource)
  gl.shaderSource(fragmentShader,fragmentShaderSource)

  gl.compileShader(vertexShader)
  gl.compileShader(fragmentShader)

  //创建program
  const program = gl.createProgram()
  gl.attachShader(program,vertexShader)
  gl.attachShader(program,fragmentShader)
  
  gl.linkProgram(program)
  gl.useProgram(program)
  return program
}

 function initProgram(gl){
  //顶点着色器源码
  var vertexShaderSource = ''+
  'void main(){'+
    //给内置变量gl_PointSize赋值像素大小
    'gl_PointSize = 20.0;' +
    //顶点位置，位于坐标原点
    'gl_Position = vec4(0.0,0.0,0.0,1.0);'+
  '}';
  //片元着色器源码
  var fragShaderSource = 
    'void main(){'+
      //定义片元颜色
      'gl_FragColor = vec4(1.0,0.0,0.0,1.0);'+
    '}';
  return initShader(gl,vertexShaderSource,fragShaderSource)
}

