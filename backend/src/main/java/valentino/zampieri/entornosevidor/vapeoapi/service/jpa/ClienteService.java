package valentino.zampieri.entornosevidor.vapeoapi.service.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import valentino.zampieri.entornosevidor.vapeoapi.entity.Cliente;
import valentino.zampieri.entornosevidor.vapeoapi.repository.ClienteRepository;
import valentino.zampieri.entornosevidor.vapeoapi.service.IClienteService;

@Service
public class ClienteService implements IClienteService {

	@Autowired
	private ClienteRepository repoCliente;
	
	@Override
	public List<Cliente> buscarTodos(){
		return repoCliente.findAll();
		
	}

	@Override
	public Cliente guardar(Cliente cliente) {
		
		return repoCliente.save(cliente);
	}

	@Override
	public void eliminar(int idCliente) {
		repoCliente.deleteById(idCliente);
		
	}
	

}
