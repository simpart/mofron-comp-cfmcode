/**
 * @file mofron-comp-cfmcode/index.js
 * @brief confirm code component for mofron
 * @license MIT
 */
const Text      = require('mofron-comp-text');
const ErrMsg    = require('mofron-comp-errmsg');
const CodeInput = require('mofron-comp-codeinput');
const HrzPos    = require('mofron-effect-hrzpos');
const loMargin  = require('mofron-layout-margin');
const HrzCenter = require('mofron-layout-hrzcenter');
const Click     = require('mofron-event-click');
const ConfArg   = mofron.class.ConfArg;
const comutl    = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("cfmcode");
	    this.shortForm("text");
            
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    
            this.layout([
	        new loMargin('top','0.3rem'),
		new HrzCenter(90)
            ]);
            this.codeinput().style({ 'margin-top': '0.2rem' });
	    this.resendText().config({
                text:'Resend Code', effect:new HrzPos(), size:'0.2rem'
	    });
            
            this.child([
                /* error area */
		this.errmsg(),
                /* text area */
                new mofron.class.Component({}),
                this.codeinput(),
		this.resendText()
            ]);

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    errmsg (prm) {
        try {
            if ('string' === typeof prm) {
                this.errmsg().text(prm);
		return;
            }
	    return this.innerComp('errmsg', prm, ErrMsg);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if (true === Array.isArray(prm)) {
                for (let idx in prm) {
                    this.text(prm[idx]);
                }
                return;
            } else if ('string' === typeof prm) {
                this.child()[1].child(
                    new Text({ text:prm, effect:new HrzPos(), size:"0.2rem" })
		);
	    } else if (true === comutl.iscmp(prm)) {
                this.child()[1].child(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    inputConf (prm) {
        try {
            for (let idx in prm) {
                this.codeinput()[idx](prm[idx]);
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    resendText (prm) {
        try {
            return this.innerComp('resendText', prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    resendCode (fnc, prm) {
        try {
            let evt = new ConfArg(fnc,prm);
            this.resendText().event(new Click(evt));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    codeinput (prm) {
        try {
            return this.innerComp('codeinput', prm, CodeInput);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    digits (prm) {
        try {
            return this.codeinput().digits(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    codeEvent (fnc,prm) {
        try {
            return this.codeinput().codeEvent(fnc,prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    mainColor (prm,opt) {
        try {
            return this.codeinput().mainColor(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
