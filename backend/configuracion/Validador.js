const joi = require('joi')

const Validador = (req, respuesta, next) => {
    const schema = joi.object({
        nombre: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must contain more than 3 characters ',
            'string.max': "The name must contain a maximum of 20 characters "
        }),
        apellido: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The last name must contain more than 3 characters',
            'string.max': "The last name must contain a maximum of 20 characters"
        }),
        correo: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email': 'Wrong email format '
        }),
        contrasena: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min': 'The password must contain at least 8 characters and contain uppercase, lowercase and number ',
            'string.pattern': "The password must be alphanumeric and contain a number "
        }),
        pais: joi.string().required(),
        imagen: joi.string(),
        from: joi.string()
    })

    const validation = schema.validate(req.body.datos, { abortEarly: false })

    if (validation.error) {

        return respuesta.json({ success: false, from: "validator", mensaje: validation.error.details, test: validation })

    }

    next()


}

module.exports = Validador


