import { forwardRef, useCallback, useRef } from "@wordpress/element";
import classNames from "classnames";
import PropTypes from "prop-types";
import DropZone from "../../elements/drop-zone";
import ImageInput from "../../elements/image-input";
import Label from "../../elements/label";

/**
 * @param {string} id Id.
 * @param {string} name Name.
 * @param {string} imageInputVariant Image input variant.
 * @param {string} previewImage Preview image.
 * @param {string} previewImageAlt Preview image alt.
 * @param {string} importText Import text.
 * @param {string} buttonVariant Button variant.
 * @param {Function} onClick On click callback.
 * @param {Function} onChange On change callback.
 * @param {Function} onReset On reset callback.
 * @param {Function} onDrop On drop callback.
 * @param {Function} onError On error callback.
 * @param {string} dropLabel Drop label.
 * @param {boolean} disabled Disabled state.
 * @param {string} resetPreviewActionAriaLabel Reset preview action aria label.
 * @param {string} className Classname.
 * @returns {JSX.Element} The ImageImport component.
 * */
const ImageImport = forwardRef( ( {
	id,
	name,
	imageInputVariant,
	previewImage,
	previewImageAlt,
	importText,
	buttonVariant,
	onClick,
	onChange,
	onReset,
	onDrop,
	onError,
	dropLabel = "Select an image or drag and drop",
	disabled,
	resetPreviewActionAriaLabel,
	className,
	...props
}, ref ) => {
	const inputRef = useRef();

	const handleOnDrop = useCallback( ( event ) => {
		if ( ! event.dataTransfer.files ) {
			return;
		}

		const file = event.dataTransfer.files[ 0 ];
		if ( file ) {
			try {
				// Verify that file is an image
				if ( ! file.type.startsWith( "image/" ) ) {
					throw new Error( "Unsupported file type." );
				}

				const input = inputRef.current;
				if ( input ) {
					// Move the file to the input
					const dataTransfer = new DataTransfer();
					dataTransfer.items.add( file );
					input.files = dataTransfer.files;

					// Trigger the input onChange event
					const inputOnChangeEvent = new Event( "change", { bubbles: true } );
					input.dispatchEvent( inputOnChangeEvent );
				}
			} catch ( error ) {
				// onError callback
				if ( onError ) {
					onError( error );
				}
			}
		}

		// onDrop callback
		if ( onDrop ) {
			onDrop( event );
		}
	}, [ onError, onDrop ] );

	return (
		<div
			className={ classNames(
				"nfd-image-import",
				disabled && "nfd-is-disabled",
				className,
			) }
			ref={ ref }
			{ ...props }
		>
			<DropZone
				onDrop={ handleOnDrop }
				disabled={ disabled }
				aria-label={ dropLabel }
				tabIndex="-1"
			>
				<div className="nfd-image-import__content">
					<ImageInput
						id={ id }
						name={ name }
						variant={ imageInputVariant }
						previewImage={ previewImage }
						previewImageAlt={ previewImageAlt }
						buttonText={ importText }
						buttonVariant={ buttonVariant }
						onClick={ onClick }
						onChange={ onChange }
						onReset={ onReset }
						disabled={ disabled }
						resetPreviewActionAriaLabel={ resetPreviewActionAriaLabel }
						ref={ inputRef }
					/>
					<Label
						htmlFor={ id }
						className="nfd-image-import__drop-label"
					>
						{ dropLabel }
					</Label>
				</div>
			</DropZone>
		</div>
	);
} );

ImageImport.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	previewImageVariant: PropTypes.string,
	previewImage: PropTypes.string,
	previewImageAlt: PropTypes.string,
	buttonText: PropTypes.string,
	buttonVariant: PropTypes.string,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	onReset: PropTypes.func,
	onDrop: PropTypes.func,
	onError: PropTypes.func,
	dropLabel: PropTypes.string,
	disabled: PropTypes.bool,
	accept: PropTypes.string,
	resetPreviewActionAriaLabel: PropTypes.string,
	className: PropTypes.string,
};

export default ImageImport;
