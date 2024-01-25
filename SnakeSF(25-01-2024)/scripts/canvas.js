export default class Canvas {

    constructor( container ) {

        this.element = document.createElement( "canvas" );
        this.context = this.element.getContext( "2d" );

        this.element.width = 300;
        this.element.height = 300;

        container.appendChild( this.element );

    }

}