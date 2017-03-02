import { PropClass } from './prop-class';
export class ClassMaster {
    ClassName : string;
    PropClasses : PropClass[];

    constructor(classname:string, props: PropClass[])
    {
        this.ClassName = classname;
        this.PropClasses = props;
    }

}
