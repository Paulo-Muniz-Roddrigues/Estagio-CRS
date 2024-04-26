import { where } from 'sequelize';
import Medicamento from '../models/Medicamentos'

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if(!id) {
      const response = await Medicamento.findAll({
        order: [['id', 'asc']]
      });
      return res.status(200).send({
        message: 'Dados Encontrados!',
        response: response,
      });
    }

    const response = await (Medicamento.findOne({
      where: {
        id,
      },
    }));

    return res.status(200).send({
      message: 'Dados Encontrados!',
      response,
    });

  }catch(error){
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try{
    const {id, nome} = req.body;

    const response = await Medicamento.create(
      {
        id,
        nome,
      },
    );

    return res.status(201).send({
      message: 'Dados Encontrados!',
      response,
    });

  }catch(error){
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if(!id){
      return res.status(400).send({
        message: 'Ops!',
        response: error.message,
      });
    };

    const response = await Medicamento.findOne({
      where: {
        id,
      },
    });

    if(!response){
      return res.status(400).send({
        message: 'Id não encntrado!',
        response: error.message,
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave]
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados atualizados!',
      response,
    });

  }catch(error){
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if(!id){
      return res.status(400).send({
        message: 'Ops!',
        response: error.message,
      });
    }
      const response = await Medicamento.findOne({
        where: {
          id,
        },
      });
  
      if(!response){
        return res.status(400).send({
          message: 'Id não encntrado!',
          response: error.message,
        });
      }

      await response.destroy();
      return res.status(200).send({
        message: 'Dados atualizados!',
        response,
      });
    }catch(error){
      return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy
}