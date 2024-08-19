const {Endereço} = require('..\models');

exports.createEndereço = async (req, res) => {
    try{
        const {Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicioIBGE } = req.body;

        const novoEndereco = awaitEndereco.create({
            Cep,
            Logradouro,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicioIBGE,
        });

        res.status(201).json(novoEndereco);
    }catch (error){
        res.status(500).json({error: 'Erro ao criar endereço', details: error.mesage});

    }
    };

    exports.getAllEnderecos = async (req, res) => {
        try{
            const enderecos = await Endereço.findAll();
            res.status(200).json(enderecos);
        }catch (error){
            res.status(500).json({error: 'Erro ao buscar endereços', details: error.message})
                }
            };




            exports.GetEnderecoById = async (req, res) => {
                try {
                    const { Id } = req.params;
                    const endereço = await Endereço.findByPk(Id);

                    if (!endereco) {
                        return res.status(404).json({ error: 'Endereço não encontrado'});
                    }
                
                    res.status(200).json(endereco);
                } catch (error) {
                    res.status(500).json ({error: 'Erro ao buscar endereço', details: error.message });

                }

            };

            exports.updateEndereco = async (req, res) => {
                try {
                  const { id } = req.params;
                  const { cep, logradouro, numero, complemento, bairro, cidade, estado, municipioIBGE } = req.body;
              
                  const endereco = await Endereco.findByPk(id);
              
                  if (!endereco) {
                    return res.status(404).json({ error: 'Endereço não encontrado' });
                  }
              
                  endereco.cep = cep;
                  endereco.logradouro = logradouro;
              
                  await endereco.save();
              
                  res.status(200).json(endereco);
                } catch (error) {
                  res.status(500).json({ error: 'Erro ao atualizar endereço', details: error.message });
                }
              };
              
              exports.deleteEndereco = async (req, res) => {
                try {
                  const { id } = req.params;
              
                  await Endereco.destroy({ where: { id } });
              
                  res.status(204).send();
                } catch (error) {
                  res.status(500).json({ error: 'Erro ao excluir endereço', details: error.message });
                }
              };


              exports.deleteEndereco = async (req, res) => {
                try {
                  const { id } = req.params;
              
                  const endereco = await Endereco.findByPk(id);
              
                  if (!endereco) {
                    return res.status(404).json({ error: 'Endereço não encontrado' });
                  }
              
                  await endereco.destroy();
              
                  res.status(204).send();
                } catch (error) {
                  res.status(500).json({ error: 'Erro ao excluir endereço', details: error.message });
                }
              };