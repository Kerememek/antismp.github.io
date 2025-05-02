<script>
  const container = document.getElementById("model-container");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const loader = new THREE.OBJLoader();
  loader.load('Raccoon.obj', function (object) {
    object.scale.set(1, 1, 1);
    object.position.y = -2;
    scene.add(object);

    // Animate the model
    function animate() {
      requestAnimationFrame(animate);
      object.rotation.y += 0.01; // Spin on Y-axis
      renderer.render(scene, camera);
    }
    animate();
  }, undefined, function (error) {
    console.error('Error loading OBJ file:', error);
  });

  camera.position.z = 5;
</script>
