import { AppBar, Box, Button, Dialog, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Slide, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from '@mui/material';
import React, { forwardRef, useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../contexts/auth';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const steps = ['Cadastro de usuário', 'Cadastro de cliente', "salvar cadastro"];

export default function FullScreenDialog() {
    const { register } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({ showPassword: false });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //steps
    const [activeStep, setActiveStep] = useState(0);

    const [emailStep, setEmailStep] = useState("");
    const [password, setpassword] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");

    const [cnpj, setCnpj] = useState("");
    const [nome_fantasia, setNome_fantasia] = useState("");
    const [razao_social, setRazao_social] = useState("");
    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return usuarioForm;
            case 1:
                return clienteForm;
            case 2:
                return revisaoForm;
            default:
                return;
        }
    };

    const handleNext = () => {
        if (activeStep == 2) {
             handleReset()
             handlePost()
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setOpen(false);
        setActiveStep(0);
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePost = () => { 
        let form = {
            email: emailStep,
            senha: password,
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            cnpj: cnpj,
            nome_fantasia: nome_fantasia,
            razao_social: razao_social,
            cep: cep,
            endereco: endereco,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            uf: uf
        };
        console.log(form)
        register(JSON.stringify(form))
        return;
    };

    const usuarioForm = (
        <Box sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: '80%',
            marginLeft: 12
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <TextField
                        required
                        id="nome"
                        name="nome"
                        label="Nome"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="sobrenome"
                        name="sobrenome"
                        label="Sobrenome"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Telefone"
                        name="Telefone"
                        label="Telefone"
                        autoComplete="given-name"
                        variant="standard"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="emailStep"
                        name="emailStep"
                        label="E-mail"
                        fullWidth
                        variant="standard"
                        value={emailStep}
                        onChange={(e) => setEmailStep(e.target.value)}
                    />
                </Grid>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
        </Box>
    )

    const clienteForm = (
        <Box sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: '80%',
            marginLeft: 12
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <TextField
                        required
                        id="CNPJ"
                        name="CNPJ"
                        label="CNPJ"
                        autoComplete="given-name"
                        variant="standard"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="nome_fantasia"
                        name="nome_fantasia"
                        label="Nome Fantasia"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={nome_fantasia}
                        onChange={(e) => setNome_fantasia(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="razao_social"
                        name="razao_social"
                        label="Razão Social"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={razao_social}
                        onChange={(e) => setRazao_social(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="CEP"
                        name="CEP"
                        label="CEP"
                        fullWidth
                        variant="standard"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="endereco"
                        name="endereco"
                        label="Endereço"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="numero"
                        name="numero"
                        label="Número"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="complemento"
                        name="complemento"
                        label="Complemento"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="bairro"
                        name="bairro"
                        label="Bairro"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cidade"
                        name="cidade"
                        label="Cidade"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="uf"
                        name="uf"
                        label="UF"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={uf}
                        onChange={(e) => setUf(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Box>
    )

    const revisaoForm = (
        <>
            <ul>
                <li>{emailStep}</li>
                <li>{nome}</li>
                <li>{sobrenome}</li>
                <li>{cnpj}</li>
                <li>{nome_fantasia}</li>
                <li>{razao_social}</li>
                <li>{cep}</li>
                <li>{endereco}</li>
                <li>{numero}</li>
                <li>{complemento}</li>
                <li>{bairro}</li>
                <li>{cidade}</li>
                <li>{uf}</li>
            </ul>
        </>
    )


    const creatorSteps = (
        <Box sx={{ width: '100%', marginTop: 2 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <React.Fragment>

                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} variant="contained">
                        {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                    </Button>
                </Box>
            </React.Fragment>

        </Box>
    )

    return (
        <div>
            <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }} onClick={handleClickOpen}>
                Adicionar usuário
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                {creatorSteps}



            </Dialog>
        </div>
    );
}