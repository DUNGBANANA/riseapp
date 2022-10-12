import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import {DATA_SERVICE} from './Data/DataService.js'
import {DATA_NICHES} from './Data/DataNiches.js'
import {DATA_TECHNOLOGIES} from './Data/DataTechnology.js'

// import TechnologyItem from './TechnologyItem.js'
import './main.scss'

function TabPanel(props:any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index:any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div className="container">

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="SERVICE" {...a11yProps(0)} />
          <Tab label="TECHNOLOGIES" {...a11yProps(1)} />
          <Tab label="NICHES" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="tabs-content">
          <div className="tab-active">
            <div className="tab-title">We build successful, long-lasting, profitable products for our clients and can help you with your projects </div>
            <div className="tab-infor">
            <div className='services-info-list'>
              {DATA_SERVICE.map((item) => (
                  <div className="item">
                    <a href="/">
                      <div className="icon-holder">
                        <img src={item.src} alt=''/>
                      </div>

                      <div className='text-title'>
                        {item.title}
                      </div>
                      <p className='des'>
                          {item.description}
                      </p>
                      <span className='learn'>Learn More</span>
                    </a>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="tabs-content">
          <div className="tab-active">
            <div className="tab-title">We use only proven and reliable technologies to ensure your app will perform seamlessly.</div>
            <div className="tab-infor">
            <div className='services-info-list'>
              {DATA_TECHNOLOGIES.map((item) => (
                  <div className="item">
                    <a href="/">
                      <div className="icon-holder">
                        <img src={item.src} alt=''/>
                      </div>

                      <div className='text-title'>
                        {item.title}
                      </div>
                      <p className='des'>
                          {/* {item.items} */}
                      </p>
                    </a>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="tabs-content">
          <div className="tab-active">
            <div className="tab-title">Our team has already gained experience helping various business sectors, now we are ready to help you.</div>
            <div className="tab-infor">
            <div className='services-info-list'>
              {DATA_NICHES.map((item) => (
                  <div className="item">
                    <a href="/">
                      <div className="icon-holder">
                        <img src={item.src} alt=''/>
                      </div>

                      <div className='text-title'>
                        {item.title}
                      </div>
                      <p className='des'>
                          {item.description}
                      </p>
                    </a>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
    </div>
  );
}
