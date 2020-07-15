(() => {
	//использована библиотека THREE.js


	//создаем сцену 
	let scene = new THREE.Scene();
	//создаем камеру 4 аргумента: 1-поле зрения; 2- ширина к высоте экрана; 3-ближайший объект который может быть в поле зрения; 4 - самый дальний
	let camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.y = 150;//задает положение камеры по y
	camera.position.z = 200;//задает положение камеры по z

	let geometry = new THREE.SphereGeometry( 70, 32, 32 );//рисуем нужную фигуру
	let spheraTexture = THREE.ImageUtils.loadTexture('./EarthMap.jpg');//подгружает текстуры

	let material = new THREE.MeshLambertMaterial({map: spheraTexture})//задает материалы рендеринга

	let sphera = new THREE.Mesh(geometry, material);//создает полигональную сеть
	scene.add(sphera);//добавляем на сцену

	camera.lookAt(sphera.position);//нужно чтобы камера смотрела на фигуру

	//создаем источник света и ее позицию на сцене
	let light = new THREE.PointLight( 'white' );
	light.position.set( 20, 200, 500 );
	scene.add( light );



	let renderer = new THREE.WebGLRenderer(); // создаем компонент который отвечает за отображение 
	renderer.setSize(window.innerWidth, window.innerHeight);//размер компонента
	document.body.appendChild(renderer.domElement);// добавляет canvas на страницу
	
	//функция рендеринга и анимации
	function render() {
	renderer.render(scene, camera);
	sphera.rotation.y += 0.003;
	requestAnimationFrame(render);
	}
	render();

})();