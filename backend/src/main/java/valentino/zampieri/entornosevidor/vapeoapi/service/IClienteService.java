package valentino.zampieri.entornosevidor.vapeoapi.service;

import java.util.List;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Cliente;

public interface IClienteService {
	List<Cliente> buscarTodos();

	Cliente guardar(Cliente cliente);
	void eliminar(int idCliente);
}

