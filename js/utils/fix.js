

function fix(geometry){
		
	geometry.faces.forEach
	(
			
		face => {
			
			face.normal = new THREE.Vector3(face.normal.x, -face.normal.z, face.normal.y);
			face.vertexNormals = face.vertexNormals.map(vn => new THREE.Vector3( vn.x, -vn.z, vn.y ) );
			
        }
		
	);
	
	
	
}


