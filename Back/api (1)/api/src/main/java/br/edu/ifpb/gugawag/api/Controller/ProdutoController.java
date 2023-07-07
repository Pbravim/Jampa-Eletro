package br.edu.ifpb.gugawag.api.Controller;

import br.edu.ifpb.gugawag.api.Modelo.Produto;
import br.edu.ifpb.gugawag.api.Service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;


    @GetMapping("/produtos")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<Produto> getProduto(){
        return  this.produtoService.getProduto();
    }

    @GetMapping("/produtos/{id}")
    public Produto getProdutoPorId(@PathVariable("id")Long idProduto){
        return this.produtoService.getProduto(idProduto);
    }

    @PostMapping("/produtos")
    public Produto inserirProduto(@RequestBody Produto produtoInserir){
        return this.produtoService.addProdutos(produtoInserir);
    }

    @PutMapping("/produtos/{id}")
    public Produto atualizarProduto(@RequestBody Produto produtoAtualizar){
        return this.produtoService.atualizarProduto(produtoAtualizar);
    }

    @DeleteMapping("/produtos/{id}")
    public void apagarProduto(@PathVariable("id")Long id){
        this.produtoService.removerProduto(id);
    }

}
