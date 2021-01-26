import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Wave from '../../assets/wave-d.svg'
import Wave2 from '../../assets/wave-u.svg'
import Learn from '../../assets/learn.svg'
import Time from '../../assets/time.svg'
import Job from '../../assets/job.svg'
import Help from '../../assets/24-7.svg'
import './features.css'
export default function Features() {
    return (
        <div>
            <Grid container style={{marginTop:200}}>
                <Grid xs={6}>
                    <img src={Learn} style={{width:'100%', padding:50}} />
                </Grid>
                <Grid xs={6} style={{ marginTop:100 , paddingRight:80}}>
                    <h1 style={{textAlign:'left'}}>Project-based, active learning</h1>
                    <p style={{textAlign:'left'}}>Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.</p>
                </Grid>
            </Grid>
                <div style={{width:'100%'}} >
                    <img src={Wave} />
                </div>
                
                <Grid container className="dark-wave"  >
                <Grid xs={6} style={{ padding:50 }}>
                <h1 style={{textAlign:'left'}}>Learn on your schedule</h1>
                    <p style={{textAlign:'left'}}>Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.</p>
              
                </Grid>
                <Grid xs={6} >
                <img src={Time} style={{width:'100%'}} />
                     </Grid>
                </Grid>


                <div style={{width:'100%'}} >
                    <img src={Wave2} />
                </div>

                
                <Grid container>
                <Grid xs={6}>
                    <img src={Job} style={{width:'100%', padding:50}} />
                </Grid>
                <Grid xs={6} style={{ marginTop:100 , paddingRight:80}}>
                    <h1 style={{textAlign:'left'}}>Get real employable skills</h1>
                    <p style={{textAlign:'left'}}>Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.</p>
                </Grid>

                <div style={{width:'100%'}} >
                    <img src={Wave} />
                </div>
                
                <Grid container className="dark-wave"  >
                <Grid xs={6} style={{ padding:50 }}>
                <h1 style={{textAlign:'left'}}>The help you need, when you need it</h1>
                    <p style={{textAlign:'left'}}>Reach out to our mentors 24/7 and have your coding questions answered quickly so you can keep learning.</p>
              
                </Grid>
                <Grid xs={6} >
                <img src={Help} style={{width:'100%'}} />
                     </Grid>
                </Grid>
                <div style={{width:'100%'}} >
                    <img src={Wave2} />
                </div>
            </Grid>
        </div>
    )
}
