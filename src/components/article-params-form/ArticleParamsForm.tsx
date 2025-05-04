import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { RadioGroup } from 'src/ui/radio-group';
import {
	fontFamilyOptions,
	fontSizeOptions,
	backgroundColors,
	fontColors,
	contentWidthArr,
	defaultArticleState,
	OptionType,
} from 'src/constants/articleProps';

import { FormEvent, useRef, useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { useClickOutside } from './hooks/useClickOutside';

type TArticleParamsProps = {
	setStandardFontFamily: (fontFamily: string) => void;
	setStandardFontSize: (fontSize: string) => void;
	setStandardFontColor: (fontColor: string) => void;
	setStandardContentWidth: (contentWidth: string) => void;
	setStandarBackgroundColor: (backgroundColor: string) => void;
};

export const ArticleParamsForm = (props: TArticleParamsProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const asideRef = useRef<HTMLElement | null>(null);

	const toggleAside = () => {
		if (!isOpen) {
			setOpen(true);
			asideRef.current?.classList.add(styles.container_open);
		} else {
			setOpen(false);
			asideRef.current?.classList.remove(styles.container_open);
		}
	};

	useClickOutside(asideRef, toggleAside, isOpen);

	const [fontFamilyState, setFontFamilyState] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeState, setFontSizeState] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [fontColorState, setFontColorState] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [backgroundColorState, setBackgroundColorState] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [contentWidthState, setContentWidthState] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	const changeParams = (
		fontFamily: string,
		fontSize: string,
		fontColor: string,
		backgroundColor: string,
		contentWidth: string
	) => {
		props.setStandardFontFamily(fontFamily);
		props.setStandardFontSize(fontSize);
		props.setStandardFontColor(fontColor);
		props.setStandardContentWidth(contentWidth);
		props.setStandarBackgroundColor(backgroundColor);
	};

	const resetClick = () => {
		setFontFamilyState(defaultArticleState.fontFamilyOption);
		setFontSizeState(defaultArticleState.fontSizeOption);
		setFontColorState(defaultArticleState.fontColor);
		setBackgroundColorState(defaultArticleState.backgroundColor);
		setContentWidthState(defaultArticleState.contentWidth);

		changeParams(
			defaultArticleState.fontFamilyOption.value,
			defaultArticleState.fontSizeOption.value,
			defaultArticleState.fontColor.value,
			defaultArticleState.backgroundColor.value,
			defaultArticleState.contentWidth.value
		);
	};

	const applyClick = () => {
		changeParams(
			fontFamilyState.value,
			fontSizeState.value,
			fontColorState.value,
			backgroundColorState.value,
			contentWidthState.value
		);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleAside} />
			<aside className={styles.container} ref={asideRef}>
				<form
					className={styles.form}
					onSubmit={(event: FormEvent) => event.preventDefault()}>
					<Text
						as={'h3'}
						size={31}
						dynamic={false}
						weight={800}
						fontStyle={'normal'}
						uppercase={true}
						align={'left'}
						family={'open-sans'}
						dynamicLite={false}>
						Задайте параметры
					</Text>

					<Select
						selected={fontFamilyState}
						options={fontFamilyOptions}
						placeholder={''}
						onChange={(selected) => {
							setFontFamilyState(selected);
						}}
						title={'шрифт'}
					/>

					<RadioGroup
						name={'fontSize'}
						options={fontSizeOptions}
						selected={fontSizeState}
						onChange={(value) => {
							setFontSizeState(value);
						}}
						title={'размер шрифта'}
					/>

					<Select
						selected={fontColorState}
						options={fontColors}
						placeholder={''}
						onChange={(selected) => {
							setFontColorState(selected);
						}}
						title={'цвет шрифта'}
					/>

					<Separator />

					<Select
						selected={backgroundColorState}
						options={backgroundColors}
						placeholder={''}
						onChange={(selected) => {
							setBackgroundColorState(selected);
						}}
						title={'цвет фона'}
					/>

					<Select
						selected={contentWidthState}
						options={contentWidthArr}
						placeholder={''}
						onChange={(selected) => {
							setContentWidthState(selected);
						}}
						title={'ширина контента'}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={resetClick}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={applyClick}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
