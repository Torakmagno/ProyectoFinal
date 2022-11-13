package valentino.zampieri.entornosevidor.vapeoapi.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="liquidos")
public class Liquido {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nombre;
	private String marca;
	private String descripcion;
	private int precio;
	private String imagenId;
	private String categoria;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getPrecio() {
		return precio;
	}
	public void setPrecio(int precio) {
		this.precio = precio;
	}
	public String getImagenId() {
		return imagenId;
	}
	public void setImagenId(String imagenId) {
		this.imagenId = imagenId;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	@Override
	public String toString() {
		return "Liquido [id=" + id + ", nombre=" + nombre + ", marca=" + marca + ", descripcion=" + descripcion
				+ ", precio=" + precio + ", imagenId=" + imagenId + ", categoria=" + categoria + "]";
	}
}
	