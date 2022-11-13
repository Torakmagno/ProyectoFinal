package valentino.zampieri.entornosevidor.vapeoapi.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="pedidos")
public class Pedido {
	 
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;	
	
	
	@JoinColumn(name ="idCliente")
	@OneToOne
	private Cliente cliente;
	
	private Date fecha;
	
	@JoinTable(name = "PedidoProducto", 
	joinColumns = @JoinColumn(name ="idPedido"),
	inverseJoinColumns = @JoinColumn(name ="idProducto")
	)
	@ManyToMany
	private List<Liquido> liquidos;
	
	
	
	
	
	public Pedido() {
		
	}





	public Integer getId() {
		return id;
	}





	public void setId(Integer id) {
		this.id = id;
	}





	public Cliente getCliente() {
		return cliente;
	}





	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}





	public Date getFecha() {
		return fecha;
	}





	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}





	public List<Liquido> getLiquidos() {
		return liquidos;
	}





	public void setLiquidos(List<Liquido> liquidos) {
		this.liquidos = liquidos;
	}





	@Override
	public String toString() {
		return "Pedido [id=" + id + ", cliente=" + cliente + ", fecha=" + fecha + ", liquidos=" + liquidos + "]";
	}

}
