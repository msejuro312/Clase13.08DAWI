package pe.cibertec.service;

import org.springframework.stereotype.Service;
import pe.cibertec.entities.Usuario;
import pe.cibertec.repository.UsuarioRepository;

import java.util.List;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario registrar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    public Usuario obtener(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario login(String correo, String clave) {
        Usuario usuario = usuarioRepository.findByCorreo(correo).orElse(null);
        if (usuario != null && usuario.getClave().equals(clave)) {
            return usuario;
        }
        return null;
    }
}
