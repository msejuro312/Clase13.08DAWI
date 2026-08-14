package pe.cibertec.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.cibertec.entities.Usuario;
import pe.cibertec.repository.UsuarioRepository;
import pe.cibertec.service.UsuarioService;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // Función para registrar un nuevo usuario
    @PostMapping("/registro")
    public ResponseEntity<Usuario> registrar(@RequestBody Usuario usuario) {
        Usuario usuarioRegistrado = usuarioService.registrar(usuario);
        return ResponseEntity.ok(usuarioRegistrado);
    }

    // Función para mostrar todos los usuarios registrados
    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtener(@PathVariable Long id) {
        Usuario usuario = usuarioService.obtener(id);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(usuario);
    }
}
