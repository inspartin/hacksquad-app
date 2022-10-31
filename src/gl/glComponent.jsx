<GLView
  style={{ flex: 1 }}
  onContextCreate={async (gl) => {
    // GL Parameter disruption
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // Renderer declaration and set properties
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor("#fff");

    // Scene declaration, add a fog, and a grid helper to see axes dimensions
    const scene = new Scene();
    scene.fog = new Fog("#3A96C4", 1, 10000);
    scene.add(new GridHelper(10, 10));

    // Add all necessary lights
    const ambientLight = new AmbientLight(0x101010);
    scene.add(ambientLight);

    const pointLight = new PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    const spotLight = new SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);

    // Add sphere object instance to our scene
    scene.add(sphere);

    // Set camera position and look to sphere
    camera.position.set(
      cameraInitialPositionX,
      cameraInitialPositionY,
      cameraInitialPositionZ
    );

    camera.lookAt(sphere.position);

    // Render function
    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
  }}
/>
