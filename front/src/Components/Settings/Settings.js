import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ClickAwayListener from '@mui/material/ClickAwayListener';


class Settings extends React.Component{
    constructor(props){
        super(props)
       
        this.wrapperRef = React.createRef();
      
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.handleClickAway()
        }
    }

    
    render(){
        const list = () => (
            <div>
           <List>
             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
               <ListItem button key={text}>
                 <ListItemIcon>
                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </ListItem>
             ))}
           </List>
           <Divider />
           <List>
             {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem button key={text}>
                 <ListItemIcon>
                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </ListItem>
             ))}
           </List>
         </div>
       );
        return(
            <div ref={this.wrapperRef}>
            <Drawer
            anchor={"right"}
            open={this.props.open}
            
            >
            {list()}
          </Drawer>
          </div>
          
        )
    }
}

export default Settings